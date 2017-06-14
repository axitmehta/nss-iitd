import csv
import json

# csvfile = open('NssProject.csv', 'r')
csvfile = open('team.csv', 'r')

# jsonfile = open('NssProject.json', 'w')
jsonfile = open('team.json', 'w')

# fieldnames = ("name", "location", "pictures", "description" , "link")
fieldnames = ("name", "email", "designation", "projects", "image", "description", "comments")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')
