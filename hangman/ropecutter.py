import random
import re


def main():
    global password, score
    #freq = ["e", "a", "r", "i", "o", "t", "n", "s", "l", "c", "u", "d", "p", "m", "h", "g", "b", "f", "y", "w", "k", "v", "x", "z", "j", "q"]
    lines = open("dict.txt").read().splitlines()
    password = random.choice(lines)
    print(password)
    pattern = str(len(password) * ".")
    #pattern = re.compile(pattern)
    print(pattern) 
    txt1 = open("dict.txt", "r")
    txt = txt1.read()
    #print(txt)
    x = re.findall(pattern, str(txt))
    print(x)
    '''password = input().lower()
    for i in freq:
        if score != int(len(password)):
            score += password.count(i)
        else:
            print(password)
            break'''


if __name__ == "__main__":
    main()
