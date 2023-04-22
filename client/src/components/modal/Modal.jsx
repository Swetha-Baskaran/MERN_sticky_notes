import React, { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { ImCross } from 'react-icons/im'
import { useDispatch } from 'react-redux';
import { addTask, fetchTask } from '../../redux/action';

const InputBox = ({ isOpen, triggerAddTaskModal }) => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState({
    task: "",
    description: "",
    due: "",
    color: "1",
    position: 0,
    status: "pending"
  })


  const handleInputChange = (e, name) => {
    const value = e.target.value;
    setNewTask({
      ...newTask,
      [name]: value
    })
  }

  const handleSubmit = async () => {
    await dispatch(addTask(newTask))
    await dispatch(fetchTask())
    await setNewTask({
      task: "",
      description: "",
      due: "",
      color: "1",
      position: 0,
      status: "pending"
    })
    await triggerAddTaskModal()
  }

  return (
    <div >
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        className='mx-0 xl:mx-64 lg:mx-40 sm:mx-40'
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#00509d59',
          },
          content: {
            bottom: '40px',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            height: '100%',
            overflow: 'hidden',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}
      >
        <div className="max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow md:max-w-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-6">
            <div className="w-full text-right text-gray-900">
              <ImCross style={{ color: 'gray', cursor: 'pointer' }}
                onClick={triggerAddTaskModal}
              />
            </div>
            <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">Add new task</h5>
            <div>
              <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input type="Title" name="Title" id="Title" value={newTask.task} onChange={(e) => { handleInputChange(e, "task") }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Task title" required />
            </div>
            <div>
              <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea type="Description" name="password" id="Description" value={newTask.description} onChange={(e) => { handleInputChange(e, "description") }} placeholder="task description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="radio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
              <ul className="grid grid-cols-5 gap-6">
                <li>
                  <input type="radio" id="1" name="hosting" value="1" className="hidden peer" checked={newTask.color === '1'} required onChange={(e) => { handleInputChange(e, "color") }} />
                  <label htmlFor="1" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  </label>
                </li>
                <li>
                  <input type="radio" id="2" name="hosting" value="2" className="hidden peer" checked={newTask.color === '2'} onChange={(e) => { handleInputChange(e, "color") }} />
                  <label htmlFor="2" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  </label>
                </li>
                <li>
                  <input type="radio" id="3" name="hosting" value="3" className="hidden peer" checked={newTask.color === '3'} onChange={(e) => { handleInputChange(e, "color") }} />
                  <label htmlFor="3" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  </label>
                </li>
                <li>
                  <input type="radio" id="4" name="hosting" value="4" className="hidden peer" checked={newTask.color === '4'} onChange={(e) => { handleInputChange(e, "color") }} />
                  <label htmlFor="4" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">

                  </label>
                </li>
                <li>
                  <input type="radio" id="5" name="hosting" value="5" className="hidden peer" checked={newTask.color === '5'} onChange={(e) => { handleInputChange(e, "color") }} />
                  <label htmlFor="5" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due</label>
              <input type="datetime-local" name="Title" id="Title" value={newTask.due} onChange={(e) => { handleInputChange(e, "due") }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Task title" required />
            </div>
            <button onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Task</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default InputBox