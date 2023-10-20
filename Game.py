import tkinter as tk
import random

r=tk.Tk()
r.title("Game")
r.config(bg="#065569")
r.title('Guess the number!')
r.geometry("400x300")
a=random.randint(0,9)
attempts=0

def update_res(text):
    result.configure(text=text)

def new_game():
    g.config(state='normal')
    global a,attempts
    a=random.randint(0,9)
    attempts=0
    update_res(text="Guess a number between 1 and 9")

def guessnum():
    global attempts
    n = int(num.get()) 
    if n != a:
        attempts += 1
     
        result = "Wrong Guess!! Try Again"
        if a < n:
            hint = "The actual number is less than the number entered"
            h=hint.format(result)
        else:
            hint = "The actual number is greater than the number entered"
            h=hint.format(n)
        result += "\n\nHINT :\n" + hint
     
    else:
        result = "You guessed the correct number"
        t=result.format(attempts)
        g.configure(state='disabled')
        result += "\n" +"\n"+ "Click on Play to start a new game"
     
    update_res(result)


inp=tk.StringVar()
num=tk.Entry(r,textvariable=inp)
result=tk.Label(r,text='Click on Play to start the game')
a=tk.Button(r,text="Play",bg="light blue",font="Calibri",width=8,height=1,command=new_game)
b=tk.Button(r,text="Exit",bg="light blue",font="Calibri",width=8,height=1,command=r.destroy)
g=tk.Button(r,text="Guess",bg="yellow",font="Calibri",state= 'disabled',width=8,height=1,command=guessnum)

a.place(x=100,y=200)
b.place(x=200,y=200)
g.place(x=150,y=150)
num.place(x=115,y=100)
result.pack()
r.mainloop()
