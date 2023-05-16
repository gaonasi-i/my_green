"""
 ★가위, 바위, 보 게임 만들기
 - 게임 방법
 1. 당신은(you) 가위, 바위, 보 중 하나를 입력한다.
 2. 컴퓨터는(com) 가위, 바위, 보 중 하나를 랜덤 생성한다.
 3. 결과 출력은 무승부, 패, 승 이다.
 4. 잘못 입력한 경우 "잘못된 입력입니다. 다시 입력해주세요"
"""
import random
import sys

print("★가위바위보 게임★")
가위바위보 = ['가위', '바위', '보']

you = input("가위, 바위, 보 중 하나를 입력해주세요:")

com = random.choice(가위바위보)
print("컴퓨터 :", com)
"""
try:
    def x():
        if 가위바위보 == you and 가위바위보 != com:
            print("승")
        elif 가위바위보 != you and 가위바위보 == com:
            print("패")
        else:
            print("무승부")
        print(random.choice(com))

except:
    print("잘못된 입력입니다. 다시 입력해주세요")
"""
if you not in 가위바위보:
    print("잘못된 입력입니다. 다시입력해주세요")
    sys.exit(0) # 프로그램 즉시 종료

if you == com:
    print("결과 : 무승부")
elif you == '가위' and com == '보':
    print("결과 : 승")
elif you == '바위' and com == '가위':
    print("결과 : 승")
elif you == '보' and com == '바위':
    print("결과 : 승")
else:
    print("패배!")
"""
rad = random.randint(0, 2)
com = 가위바위보[rad]
print("컴퓨터:", com)
"""
