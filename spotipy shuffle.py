import spotipy
from spotipy.oauth2 import SpotifyOAuth
import random
import os

def load_credentials(file_path):
    credentials = {}
    with open(file_path, 'r') as file:
        for line in file:
            key, value = line.strip().split('=')
            credentials[key] = value
    return credentials

credentials = load_credentials(os.path.join('keys', 'spotify-credentials.txt'))

client_id = credentials['client_id']
client_secret = credentials['client_secret']
redirect_uri = 'https://playingcarddecks.com/cdn/shop/articles/shuffling-a-deck-of-cards.jpg?v=1603733833'

scope = "playlist-modify-private playlist-modify-public"
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id,
                                               client_secret=client_secret,
                                               redirect_uri=redirect_uri,
                                               scope=scope))

playlist_id = '' #insert playlist link

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
