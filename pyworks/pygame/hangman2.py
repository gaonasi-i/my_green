"""
 hangman 게임 만들기
 - 단어의 각 글자 자리에 짧은선이 그려진다.
 - 글자 1개를 맞추면 글자가 표시되고, 추가로 계속 맞추면 글자가 표시된다.
 - 틀리면 기회가 1번 줄어든다.
 - 전체 글자를 입력하여 맞추면 프로그램 바로 종료됨
"""
import random

words = ['dog', 'cat', 'monkey', 'chicken', 'frog', 'horse']
lives_remaining = 10   # 남은 기회 변수 (전역 변수)
guessed_letters = ''   # 추측된 단어 변수

def pick_a_word():
    word = random.choice(words)
    return word

def get_guess(word):
    print_word_with_blanks(word)
    print('Lives Remaining:' + str(lives_remaining))
    guess = input("Guessa letter or whole word?") # 철자 입력 or 단어
    return guess                                  #게이머가 항상 'a'를 추출한다.

def print_word_with_blanks(word):
    #print("아직 구현되지 않음")
    display_word = ''                           # 추축된 단어를 표시할 변수
    for letter in word:
        if guessed_letters.find(letter) > -1:   # 글자를 찾음
            display_word += letter              # 단어를 추가해서 저장
        else:
            display_word += '-'                 # 글자를 찾지 못했을때 blank(밑줄)을 추가한다
    print(display_word)

def process_guess(guess, word):
    global lives_remaining   # global : 지역변수를 전역변수화
    global guessed_letters   # 추축한 단어를 저장할 변수

    lives_remaining -=1       # 기회가 1번 줄어듬
    guessed_letters += guess  # 컴티 추축한 글자에 게이머가 입력한 글자가 추가됨

    if guess == word:
        return True
    return False              # return False 넘어가지 않음 / return True 종료됨

def play():
    word = pick_a_word()
    while True:
        guess = get_guess(word)
        if process_guess(guess, word):   # 추축해서 맞췄을때
            print("You win! Well done")
            break
        if lives_remaining == 0:
            print("You are Hung")         # 틀렸을때
            print("The word was: " + word)
            break
play()
