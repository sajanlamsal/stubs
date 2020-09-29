from typing import List

lucky_numbers: List[int] = [1, 213, 12]
friend: List[str] = ["sajan", "sabin", "umesh", "dinesh"]

friend.extend(lucky_numbers)
print(friend)
