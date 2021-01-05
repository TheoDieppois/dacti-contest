import openSocket from 'socket.io-client';
const socket = openSocket('https://dacti-contest.herokuapp.com/', {
  transports: ['websocket'],
});
export default socket;
