import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react'
import { db } from '../environments/environment.prod';

const formatDateString = (seconds) => {
	if (!seconds) {
		return ""
	}
	return new Date(seconds * 1000).toLocaleDateString("en-US")
}
const formatTime = (seconds) => {
	if (!seconds) {
		return "";
	}
	return new Date(seconds * 1000).toLocaleTimeString('en-US')
}

const Chat = (props) => {
	const [room, setRoom] = useState(null);
	const roomInputRef = useRef(null);

	const [newMessage, setNewMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const messagesRef = collection(db, 'messages');
	

	useEffect(() => {
		const queryMessages = query(messagesRef, where("room", "==", room),orderBy("createdAt"));
		const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
			let messages = []
			snapshot.forEach((doc) => {
				messages.push({ ...doc.data(), id: doc.id })
			})
			setMessages(messages);
		});
		return () => unsubscribe();
	},[room])

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (newMessage === '') return;
		await addDoc(messagesRef, {
			text: newMessage,
			createdAt: serverTimestamp(),
			user: props.name,
			room: room
		});
		setNewMessage("");
	}
	const handleRoom = () => {
		if (roomInputRef.current.value == '') return;
		setRoom(roomInputRef.current.value);
		
	}
  return (
		<div>
			{ !room ? <div>
				<div className='flex justify-end top-0 bg-gray-300 p-4'>
					<a href="/dashboard" type="button" className="rounded-full mr-4">X</a>
				</div>
				<div className="text-center">
				<h2>Enter Room Name</h2>
				<input ref={roomInputRef} className="placeholder-shown:border-gray-500 border-solid border-2 border-sky-500" placeholder="Enter Room Name" />
				<button onClick={ handleRoom } type='button' className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Enter Chats</button>
				</div>
			</div> : 
				<div className="flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg ">
					<div className='flex justify-between sticky top-0 bg-gray-300 p-4'>
					<h2>Welcome to { room }</h2>
					<a href="/dashboard" type="button" className="rounded-full mr-4">X</a>
					</div>
					<div className="flex flex-col flex-grow max-h-full p-4 overflow-auto h-screen">
						{ messages.map(((message,i) =>
							
							<div key={i} className="flex w-full mt-2 space-x-3 max-w-xs">
								<div className="">
								{message.user }
								</div>
								<div>
									<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
										<p className="text-sm">{message.text }</p>
								</div>
									<span className="text-xs text-gray-500 leading-none">{ formatDateString(message.createdAt?.seconds) } {formatTime(message.createdAt?.seconds) }</span>
							</div>
						</div>
							)) }
		 </div>
		 
			 <form onSubmit={handleSubmit} className='sticky bottom-0'>
				 <div className="bg-gray-300 p-4 flex flex-row justify-between">
					 <input onChange={(e) => setNewMessage(e.target.value)} value={newMessage} className="flex items-center h-10 w-11/12 rounded px-3 text-sm" type="text" placeholder="Type your message" />
					 <button type='submit' className="rounded-full w-1/12 text-white bg-gray-900">Send</button>
				 </div>
			 </form>
	 </div> }
</div>
  )
}

export default Chat