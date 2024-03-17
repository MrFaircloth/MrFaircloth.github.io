import requests
import sys

def search_album(album_name):
    response = requests.get(f'https://api.deezer.com/search/album?q={album_name}')
    data = response.json()

    albums = []
    for album in data['data']:
        album_id = album['id']
        band_name = album['artist']['name']
        album_name = album['title']
        albums.append((album_id, band_name, album_name))

    return albums

def get_album_details(album_id):
    response = requests.get(f'https://api.deezer.com/album/{album_id}')
    data = response.json()

    album_id = data['id']
    band_name = data['artist']['name']
    album_name = data['title']
    publish_date = data['release_date']
    genre_ids = data['genres']['data']  # This is a list of genres
    track_list = [track['title'] for track in data['tracks']['data']]  # This is a list of tracks
    album_art_link = data['cover']

    album_details = (album_id, band_name, album_name, publish_date, genre_ids, track_list, album_art_link)

    return album_details

if __name__ == "__main__":
    command = sys.argv[1]  # Get command from command line argument

    if command == "search":
        album_name = sys.argv[2]  # Get album name from command line argument
        albums = search_album(album_name)
        for album in albums:
            print(album)
    elif command == "id":
        album_id = sys.argv[2]  # Get album ID from command line argument
        album_details = get_album_details(album_id)
        print(album_details)