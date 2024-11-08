import express from 'express';

const router = express.Router();

// User Sign-up
router.post('/signup', async (req, res) => 
{
    const { username, password } = req.body;

    try 
    {
        const existingUser = await req.app.locals.userCollection.findOne({ username });

        if(existingUser) 
        {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const latestUser = await req.app.locals.userCollection
                            .find({})
                            .sort({userID: -1})
                            .limit(1)
                            .toArray();
        
        let newUserID;

        if(latestUser.length>0)
        {
            newUserID = latestUser[0].userID+1;
        }
        else
        {
            newUserID = 1;
        }

        const newUser = {
            userID: newUserID,
            username,
            password
        };

        const result = await req.app.locals.userCollection.insertOne(newUser);

        return res.status(200).json({
            status: 'success',
            message: 'signup successful',
        });
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error signing up user', error: error.message });
    }
});

// User Login
router.post('/login', async (req, res) => 
{
    const { username, password } = req.body;

    //console.log('Request body:', req.body);

    try 
    {
        const user = await req.app.locals.userCollection.findOne({ username });

        if(!user) 
        {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        if(user.password !== password)
        {
            return res.status(401).json({
                status: 'error',
                message: 'invalid sign in'
            });
        }
        
        return res.status(200).json({
            status: 'success',
            message: 'Login successful',
            user
        });
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});

// User Logout
router.post('/logout', (req, res) => 
{
    req.session.destroy((err) => 
    {
        if (err) 
        {
            return res.status(500).json({ message: 'Error logging out' });
        }

        res.json({ message: 'Logout successful' });
    });
});

// --- USER ROUTES ---

// Fetch all users
router.get('/users', async (req, res) => 
{
    //console.log("API hit: /api/users"); //debugging

    try 
    {
        const users = await req.app.locals.userCollection.find().toArray();
        res.json(users);
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

// Fetch a specific user by ID
router.get('/users/:userID', async (req, res) => 
{
    const userID = parseInt(req.params.userID);

    try 
    {
        const user = await req.app.locals.userCollection.findOne({ userID });

        if(!user) 
        {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error fetching user', error });
    }
});

// Edit a user profile
router.put('/users/:userID', async (req, res) => 
{
    const userID = parseInt(req.params.userID);
    const updatedData = req.body; // contains the fields to be updated

    try 
    {
        const result = await req.app.locals.userCollection.updateOne(
            { userID },
            { $set: updatedData }
        );

        if(result.matchedCount === 0) 
        {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User updated successfully' });
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error updating user', error });
    }
});

// Delete a user profile
router.delete('/users/:userID', async (req, res) => 
{
    const userID = parseInt(req.params.userID);

    try 
    {
        const result = await req.app.locals.userCollection.deleteOne({ userID });

        if(result.deletedCount === 0) 
        {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } 
    catch(error)
    {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});

// --- PLAYLIST ROUTES ---

// Fetch all playlists
router.get('/playlists', async (req, res) => 
{
    try 
    {
        const playlists = await req.app.locals.playlistCollection.find().toArray();
        res.json(playlists);
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error fetching playlists', error: error.message });
    }
});

// Fetch a specific playlist by ID
router.get('/playlists/:playlistID', async (req, res) => 
{
    const playlistID = parseInt(req.params.playlistID);

    try 
    {
        const playlist = await req.app.locals.playlistCollection.findOne({ playlistID });

        if(!playlist) 
        {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        res.json(playlist);
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error fetching playlist', error });
    }
});

// Create a new playlist
router.post('/playlists/:ownerID', async (req, res) => 
{
    try 
    {
        //console.log("Request parameters:", req.params); //debugging

        const ownerID = parseInt(req.params.ownerID);

        //console.log("Parsed ownerID:", ownerID); //debugging

        const newPlaylist = req.body;

        // console.log("ownerID:", ownerID); //debugging
        // console.log("newPlaylist:", newPlaylist); //debugging

        const latestPlaylist = await req.app.locals.playlistCollection
         .find({})
         .sort({ playlistID: -1 })
         .limit(1)
         .toArray();

        //console.log("latestPlaylist:", latestPlaylist); //debugging

        // console.log("latestID: ", latestPlaylist[0].playlistID); //debugging

        let newPlaylistID;

        if(latestPlaylist.length>0)
        {
            newPlaylistID = latestPlaylist[0].playlistID + 1;
        }
        else
        {
            newPlaylistID = 1;
        }

        newPlaylist.playlistID = newPlaylistID;
        newPlaylist.ownerID = ownerID;
        
        //console.log("New Playlist after adding ownerID:", newPlaylist); //debugging

        const result = await req.app.locals.playlistCollection.insertOne(newPlaylist);

        await req.app.locals.userCollection.updateOne(
            { userID: ownerID },
            { $push: { playlists: newPlaylistID } }
        );

        return res.status(201).json({
            status: 'success',
            message: 'playlist created',
            playlist: result.ops[0]
        });
    } 
    catch(error) 
    {
        //console.error("Error creating playlistzsssss:", error.message || error);
        res.status(500).json({ message: 'Error creating playlist', error });
    }
});

// Edit a playlist by ID
router.put('/playlists/:playlistID', async (req, res) => 
{
    const playlistID = parseInt(req.params.playlistID);
    const updatedPlaylist = req.body;

    try 
    {
        const result = await req.app.locals.playlistCollection.updateOne({ playlistID }, { $set: updatedPlaylist });

        if(result.matchedCount === 0) 
        {
            return res.status(404).json({ message: 'Playlist not found' });
        }
        
        res.json({ message: 'Playlist updated' });
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error updating playlist', error });
    }
});

// Delete a playlist by ID
router.delete('/playlists/:playlistID', async (req, res) => 
{
    const playlistID = parseInt(req.params.playlistID);

    try 
    {
        const playlist = await req.app.locals.playlistCollection.findOne({ playlistID });

        if(!playlist) 
        {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        const ownerID = playlist.ownerID;

        const result = await req.app.locals.playlistCollection.deleteOne({ playlistID });

        if(result.deletedCount === 0) 
        {
            return res.status(404).json({ message: 'Playlist not found' });
        }

        await req.app.locals.userCollection.updateOne(
            { userID: ownerID },
            { $pull: { playlists: playlistID } }
        );

        res.json({ message: 'Playlist deleted' });
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error deleting playlist', error });
    }
});

// --- SONG ROUTES ---

// Fetch all songs
router.get('/songs', async (req, res) => 
{
    try 
    {
        const songs = await req.app.locals.songsCollection.find().toArray();
        
        res.json(songs);
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error fetching songs', error });
    }
});

// Fetch a specific song by ID
router.get('/songs/:songID', async (req, res) => 
{
    const songID = parseInt(req.params.songID);

    try 
    {
        const song = await req.app.locals.songsCollection.findOne({ songID });

        if(!song) 
        {
            return res.status(404).json({ message: 'Song not found' });
        }

        res.json(song);
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error fetching song', error });
    }
});

// Create a new song in a specific playlist
router.post('/songs/:playlistID', async (req, res) => 
{
    try 
    {
        const playlistID = parseInt(req.params.playlistID);
        const newSong = req.body;

        const latestSong = await req.app.locals.songsCollection
            .find({})
            .sort({ songID: -1 })
            .limit(1)
            .toArray();

        let newSongID;

        if(latestSong.length > 0) 
        {
            newSongID = latestSong[0].songID + 1;
        } 
        else 
        {
            newSongID = 1;
        }

        newSong.songID = newSongID;
        newSong.playlistID = playlistID;

        const result = await req.app.locals.songsCollection.insertOne(newSong);

        await req.app.locals.playlistCollection.updateOne(
            { playlistID: playlistID },
            { $push: { songs: newSongID } }
        );

        return res.status(201).json({
            status: 'success',
            message: 'Song created',
            song: result.ops[0]
        });
    } 
    catch (error) 
    {
        res.status(500).json({ message: 'Error creating song', error });
    }
});

// Delete a song by ID
router.delete('/songs/:simpleID', async (req, res) => 
{
    const simpleID = parseInt(req.params.simpleID);

    try 
    {
        const result = await req.app.locals.songsCollection.deleteOne({ simpleID });

        if(result.deletedCount === 0) 
        {
            return res.status(404).json({ message: 'Song not found' });
        }
        
        res.json({ message: 'Song deleted' });
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error deleting song', error });
    }
});

// --- FRIEND/FOLLOW ROUTES ---

// Follow a user
router.post('/users/:userID/follow', async (req, res) => 
{
    const userID = parseInt(req.params.userID);
    const followerID = req.body.followerID; // The ID of the follower

    try 
    {
        const user = await req.app.locals.userCollection.findOne({ userID });
        
        if(user && !user.followers.includes(followerID)) 
        {
            user.followers.push(followerID);

            await req.app.locals.userCollection.updateOne( { userID }, { $set: { followers: user.followers } });

            res.json({ message: 'Followed user', user });
        } 
        else 
        {
            res.status(404).json({ message: 'User not found or already followed' });
        }
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error following user', error });
    }
});

// Unfollow a user
router.delete('/users/:userID/unfollow', async (req, res) => 
{
    const userID = parseInt(req.params.userID);
    const followerID = req.body.followerID; // The ID of the follower

    try 
    {
        const user = await req.app.locals.userCollection.findOne({ userID });
        
        if(user && user.followers.includes(followerID)) 
        {
            user.followers = user.followers.filter(id => id !== followerID);

            await req.app.locals.userCollection.updateOne({ userID }, { $set: { followers: user.followers } });

            res.json({ message: 'Unfollowed user', user });
        } 
        else 
        {
            res.status(404).json({ message: 'User not found or not following' });
        }
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error unfollowing user', error });
    }
});

// --- SEARCH ROUTES ---

// Search for users
router.get('/search/users', async (req, res) => 
{
    const query = req.query.q; // The search query

    try 
    {
        const users = await req.app.locals.userCollection.find({ name: { $regex: query, $options: 'i' } }).toArray();
        
        res.json(users);
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error searching users', error });
    }
});

// Search for songs
router.get('/search/songs', async (req, res) => 
{
    const query = req.query.q; // The search query

    try 
    {
        const songs = await req.app.locals.songsCollection.find({ title: { $regex: query, $options: 'i' } }).toArray();
       
        res.json(songs);
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error searching songs', error });
    }
});

// Search for playlists
router.get('/search/playlists', async (req, res) => 
{
    const query = req.query.q; // The search query

    try 
    {
        const playlists = await req.app.locals.playlistCollection.find({ name: { $regex: query, $options: 'i' } }).toArray();
       
        res.json(playlists);
    } 
    catch(error) 
    {
        res.status(500).json({ message: 'Error searching playlists', error });
    }
});

// --- ACTIVITY FEED ROUTES ---

// Fetch user activity feed
router.get('/users/:userID/activity', async (req, res) => 
{
    const userID = parseInt(req.params.userID);

    try 
    {
        const user = await req.app.locals.userCollection.findOne({ userID });

        if(!user) 
        {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const activity = await req.app.locals.playlistCollection
            .find({ $or: [{ addedBy: userID }, { 'friends.userID': userID }] })
            .sort({ createdAt: -1 })
            .limit(10) // Limit to the last 10 activities
            .toArray();
        
        res.json(activity);
    } 
    catch(error) 
    { 
        res.status(500).json({ message: 'Error fetching activity', error }); 
    } 
});


export default router;
