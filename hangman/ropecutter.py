import random
import re


def main():
    global password
    score = 0
    freq = ["e", "a", "r", "i", "o", "t", "n", "s", "l", "c", "u", "d", "p", "m", "h", "g", "b", "f", "y", "w", "k", "v", "x", "z", "j", "q"]
    lines = open("dict.txt").read().splitlines()
    password = random.choice(lines)
    print(password)
    l = len(password)
    pattern = str(len(password) * ".")

    txt1 = open("dict.txt", "r")
    txt = txt1.read()
    
    while (score != l):
        a = input()
        for i in range(l):
            if (password[i] == a):
                print(password[i])
                score += 1
                pat = pattern
                pattern = ""
                if (i != 0):
                    pattern = pat[0:i]
                pattern += a
                if (i != l):
                    pattern += pat[i+1:l]
        print(pattern)
        x = re.findall(str(pattern), str(txt))
        #print(x)
        print()

    '''password = input().lower()
    for i in freq:
        if score != int(len(password)):
            score += password.count(i)
        else:
            print(password)
            break'''


if __name__ == "__main__":
    main()
