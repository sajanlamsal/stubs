my_name: str = "sajan"

print(my_name[0])
print(len(my_name))
print(my_name)

try:
    print(my_name.index("G"))
except Exception:
    print("-1")

pi: float = 3.14
# text = 'The value of pi is ' + pi      ## NO, does not work
text: str = 'The value of pi is ' + str(pi)  # yes

raw = r'this\t\n and that'
# this\t\n and that without r = this #tab #newline and that
print(raw)

multi = """It was the best of times.
  It was the worst of times."""

# It was the best of times.
#   It was the worst of times.
print(multi)

print("sajan\nsajan")

# slice or substring
s: str = "Hello"

# syntax string[start:end]

print(s[1:4])  # H
print(s[0:2] is 'He')  # He false because is and == different
print(s[1:4] == "ell")  # He

# input
name: str = input("enter your name ")
print("Hello {0}!!".format(name))
print("Hello " + name)

age: int = input("enter your age")
print(int(age))