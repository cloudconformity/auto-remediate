import json
import pprint
import sys

if len(sys.argv) != 2:
    print("PLease enter only one json string")
    sys.exit(0)

val = sys.argv[1]
print(val)
json_value = json.loads(val)

print(json.dumps(json_value, indent=4))