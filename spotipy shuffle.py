import spotipy
from spotipy.oauth2 import SpotifyOAuth
import random

client_id = 'b5b08f65cb17409fb2c70555386a9f0f'
client_secret = '9fea476dcdb94f228d764cb1d99245fb'
redirect_uri = 'https://open.spotify.com/playlist/207ZaqdhQRThK28IbG2MCK'

scope = "playlist-modify-private playlist-modify-public"
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id,
                                               client_secret=client_secret,
                                               redirect_uri=redirect_uri,
                                               scope=scope))

playlist_id = 'https://open.spotify.com/playlist/0Duk3UcSHykjDBpybAsS2A?si=b53baf75c1f24377'

results = sp.playlist_tracks(playlist_id)
tracks = results['items']

while results['next']:
    results = sp.next(results)
    tracks.extend(results['items'])
    
track_ids = [track['track']['id'] for track in tracks]

random.shuffle(track_ids)

sp.user_playlist_replace_tracks(user=sp.current_user()['id'], playlist_id=playlist_id, tracks=[])

for i in range(0, len(track_ids), 100):
    sp.playlist_add_items(playlist_id, track_ids[i:i+100])

print("playlist randomized!")
