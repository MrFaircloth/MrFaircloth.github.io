import csv

responses = []
with open('ceremony.csv', 'r') as file:
    reader = csv.DictReader(file)
    responses = list(reader)

album_rating = [int(response['Album Rating']) for response in responses if response['Album Rating'] != '']

tracks = ['Dear God','In A Spiral','Into Happiness','Pedestal','Love Me Now','Let Me Down','News Today','Mister Impossible','Glowing','Gaunt Kids','Ceremony']

track_ratings = []
for track in tracks:
    ratings = [int(response[track]) for response in responses if response[track] != '']
    track_ratings.append([track, sum(ratings) / len(ratings)])

comments = [{'user': response['Email Address'], 'comment': response['Comments']} for response in responses if response['Comments'] != '']

results = {
    'album_name': 'Ceremony',
    'band_name': 'Phantogram',
    'album_rating': sum(album_rating) / len(album_rating),
    'track_ratings': track_ratings,
    'comments': comments
}

# print results in json format to the console
import json
print(json.dumps(results, indent=2))
