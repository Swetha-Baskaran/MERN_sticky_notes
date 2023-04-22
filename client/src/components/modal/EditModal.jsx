import React, { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch } from 'react-redux';
import { ImCross } from 'react-icons/im'
import { fetchTask, updateTask } from '../../redux/action';

const EditInputBox = ({ isOpen, triggerEditTaskModal, taskToUpdate }) => {
  const dispatch = useDispatch()
  const [task, setTask] = useState({
    ...taskToUpdate
  })

  const handleInputChange = (e, name) => {
    const value = e.target.value;
    setTask({
      ...task,
      [name]: value
    })
  }

  const onSubmit = async () => {
    await dispatch(updateTask(task))
    await dispatch(fetchTask())
    await triggerEditTaskModal()
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        className='mx-0 xl:mx-96 lg:mx-64 sm:mx-40'
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
        <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow md:max-w-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-6">
            <div className="w-full text-right text-gray-900">
              <ImCross style={{ color: 'gray', cursor: 'pointer' }}
                onClick={triggerEditTaskModal}
              /></div>
            <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">Update task</h5>
            <div>
              <label for="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input type="Title" name="Title" id="Title" value={task.task} onChange={(e) => { handleInputChange(e, "task") }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Task title" required />
            </div>
            <div>
              <label for="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea type="Description" name="password" id="Description" value={task.description} onChange={(e) => { handleInputChange(e, "description") }} placeholder="task description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
              <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>

              <div className='flex items-center'>
                <div className='flex items-center'>
                  <input checked={task.status === "pending"} id="status1" type="radio" value="pending" onChange={(e) => {handleInputChange(e, "status")}} name="status" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                  <label for="status1" className='pl-2'>Pending</label>
                </div>

                <div className='flex items-center pl-5'>
                  <input checked={task.status === "completed"} id="status2" type="radio" value="completed" onChange={(e) => {handleInputChange(e, "status")}} name="status" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                  <label for="status2" className='pl-2'>Completed</label>
                </div>
              </div>
            </div>
            <div>
              <label for="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
              <ul className="grid grid-cols-5 gap-6">
                <li>
                  <input type="radio" onChange={(e) => { handleInputChange(e, "color") }} id="1" name="hosting" value="1" checked={task.color === '1'} className="hidden peer" required />
                  <label for="1" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  </label>
                </li>
                <li>
                  <input type="radio" onChange={(e) => { handleInputChange(e, "color") }} id="2" name="hosting" value="2" checked={task.color === '2'} className="hidden peer" />
                  <label for="2" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  </label>
                </li>
                <li>
                  <input type="radio" onChange={(e) => { handleInputChange(e, "color") }} id="3" name="hosting" value="3" checked={task.color === '3'} className="hidden peer" />
                  <label for="3" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  </label>
                </li>
                <li>
                  <input type="radio" onChange={(e) => { handleInputChange(e, "color") }} id="4" name="hosting" value="4" checked={task.color === '4'} className="hidden peer" />
                  <label for="4" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">

                  </label>
                </li>
                <li>
                  <input type="radio" onChange={(e) => { handleInputChange(e, "color") }} id="5" name="hosting" value="5" checked={task.color === '5'} className="hidden peer" />
                  <label for="5" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <label for="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due</label>
              <input type="datetime-local" name="Title" id="Title" value={task.due} onChange={(e) => { handleInputChange(e, "due") }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Task title" required />
            </div>
            <button onClick={onSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Task</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default EditInputBox