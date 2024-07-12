# app.py
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/paintings')
def paintings():
    return render_template('paintings.html')

if __name__ == '__main__':
    app.run(debug=True)
