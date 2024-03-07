import React, { useContext, useEffect, useState } from "react"
import { BsMessenger, BsX } from "react-icons/bs"
import { VscSend } from "react-icons/vsc"
import io from "socket.io-client"
import logo from "../../assets/react.svg"
import { Context } from "../../../Context"

const API_URL = "http://localhost:5000/getMessage"

const socket = io.connect("http://localhost:5000/")

const Chat = () => {

  const [closed, setClosed] = useState(true)
  const [message, setMessage] = useState('')
  const [data, setData] = useState([])
  const { user } = useContext(Context)

  const getUser = async () => {

    await fetch(API_URL, {
        method: 'GET',
        headers: {'Content-Type' : 'application/json'}
    })
    .then(response => response.json())
    .then((data) => {
        setData(data.message)
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })

  }

  const sendMessage = async () => {

    if(message.length < 1){ return }
    const test = await socket.emit("send", {name: user.name, message: message})
    setMessage('')
    if(test.connected){getUser()}
  }

  useEffect(() => { getUser() }, [])

  useEffect(() => {

    socket.on("new_message", (data) => { getUser() })

  }, [socket])

  return closed ? 
  (
    <div className="fixed bottom-5 right-5 z-50">
        <BsMessenger className="chat rounded-full" onClick={() => {setClosed(false)}}/>
    </div>
  ) : 
  (
    <div className="w-[300px] h-[400px] min-shadow rounded fixed bottom-5 right-5 overflow-hidden bg-white z-50">
        <div className="w-full h-[10%] px-[10px] flex items-center justify-between bottom-shadow">
            <span className="ml-[5px] font-semibold">Message groupé</span>
            <BsX className="x mt-[5px]" onClick={() => {setClosed(true)}}/>
        </div>
        <div className="w-full h-[77%] p-[10px] gap-[30px] flex flex-col overflow-auto">

            {data.map(elem => (

                
                user.name === elem.pseudo ? 
                (
                <div key={elem.id} className="w-full gap-[10px] flex justify-end">
                    <div className="flex flex-row items-start justify-end gap-[10px] w-[200px]">
                        <div className="flex flex-col gap-[5px]">
                            <h3 className="messuser">{elem.name}</h3>
                            <div className="p-[10px] rounded  message-active">
                                {elem.message}
                            </div>
                        </div>
                        <img src={elem.photo} alt="user" className="w-[35px] mt-[5px] rounded-full" />
                    </div>
                </div>
                ): 
                <div key={elem.id} className="w-full gap-[10px] flex justify-start">
                <div className="flex flex-row items-start gap-[10px] w-[200px]">
                    <img src={elem.photo} alt="user" className="w-[35px] mt-[5px] rounded-full" />
                    <div className="flex flex-col gap-[5px]">
                        <h3 className="messuser">{elem.pseudo}</h3>
                        <div className="p-[10px] rounded message">
                            {elem.message}
                        </div>
                    </div>
                </div>
                </div>
            ))}

        </div>
        <div className="w-full h-[13%] flex items-center justify-around px-[10px]">
            <div className="w-[85%]">
                <input type="text" className="message-input" placeholder="Tapez ici" value={message} onChange={(e) => {setMessage(e.target.value)}}/>
            </div>
            <VscSend className="send-ico" onClick={sendMessage}/>
        </div>
    </div>
  )
    

}

export default Chat