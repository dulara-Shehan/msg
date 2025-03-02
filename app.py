from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'  # Session management සඳහා
socketio = SocketIO(app)

# Home Page
@app.route('/')
def home():
    return render_template('index.html')

# Socket.IO event for handling messages
@socketio.on('message')
def handle_message(msg):
    print("Message: " + msg)
    send(msg, broadcast=True)  # Send message to all connected clients

if __name__ == '__main__':
    socketio.run(app, debug=True)