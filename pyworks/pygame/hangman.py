"""
 hangman 게임 만들기
 - 단어의 각 글자 자리에 짧은선이 그려진다.
 - 글자 1개를 맞추면 글자가 표시되고, 추가로 계속 맞추면 글자가 표시된다.
 - 틀리면 기회가 1번 줄어든다.
 - 전체 글자를 입력하여 맞추면 프로그램 바로 종료됨
"""
import random

words = ['dog', 'cat', 'monkey', 'chicken', 'frog', 'horse']
lives_remaining = 10 # 남은 기회 변수 (전역 변수)
def pick_a_word():
    word = random.choice(words)
    return word

def get_guess():
    return 'a' #게이머가 항상 'a'를 추출한다.

def process_guess(guess, word):
    global lives_remaining  # global : 지역변수를 전역변수화
    lives_remaining -=1
    return False  # return False 넘어가지 않음 / return True 종료됨

def play():
    word = pick_a_word()
    while True:
        guess = get_guess()
        if process_guess(guess, word): # 추축해서 맞췄을때
            print("You win! Well done")
        else:
            print("You are Hung") # 틀렸을때
            print("The word was: " + word)
        break
play()
