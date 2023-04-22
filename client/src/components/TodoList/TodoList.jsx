import React, { useState, useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import './style.css'
import { FaPlus } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import { MdDeleteForever } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import InputBox from "../modal/Modal"
import EditInputBox from '../modal/EditModal'
import { deleteTask, fetchTask, updateTask } from '../../redux/action'
import { taskListSelector } from '../../redux/slice'

const TodoList = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })

  const dispatch = useDispatch()
  const { taskList = [] } = useSelector(taskListSelector)

  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false)
  const [editTaskModalOpen, setEditTaskModalOpen] = useState(false)
  const [taskToUpdate, setTaskToUpdate] = useState(0);

  const triggerAddTaskModal = () => {
    setAddTaskModalOpen(!addTaskModalOpen)
  }

  const triggerEditTaskModal = () => {
    setEditTaskModalOpen(!editTaskModalOpen)
  }

  useEffect(() => {
    dispatch(fetchTask())
  }, [])


  const handleDelete = async (id) => {
    await dispatch(deleteTask(id))
    await dispatch(fetchTask())
  }

  return (
    <>
      {
        isTabletOrMobile && <div className="flex items-center justify-center p-8 pb-2 m-4 bg-white p fixedTask">
          <h2 className='text-white px-5 py-2.5 mr-2 mb-2'>Add New Note</h2>
          <button onClick={() => { triggerAddTaskModal() }} 
                  type="button" 
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <FaPlus />
          </button>
        </div>
      }
      <InputBox triggerAddTaskModal={triggerAddTaskModal} isOpen={addTaskModalOpen} />
      <EditInputBox triggerEditTaskModal={triggerEditTaskModal}
        isOpen={editTaskModalOpen}
        taskToUpdate={taskList[taskToUpdate]} />
      <div className="grid p-4 mb-8 md:mb-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          !isTabletOrMobile && <div className="flex flex-col items-center justify-center p-8 m-4 bg-white task"
            onClick={() => { triggerAddTaskModal() }}
          >
            <FaPlus className='add-icon' />
            <p>Add New Note</p>
          </div>
        }
        {
          taskList?.map((item, index) => {
            const dueTime = item.due.split("T")
            return <div className="flex flex-col justify-between p-6 pb-4 m-2 bg-white md:m-4 task" key={index}>
              <div>
                <div className='flex justify-between'>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item?.task}</h3>
                  <p>{item.status}</p>
                </div>
                <p className="my-4 descriptionBox">{item?.description}</p>
              </div>
              <div className="flex items-center justify-between">
                Due: {dueTime[0]} {dueTime[1]}
                <div className="flex items-center justify-between">
                  <FaEdit className='edit-icon' onClick={() => {
                    setTaskToUpdate(index)
                    triggerEditTaskModal()
                  }} />
                  <MdDeleteForever className='delete-icon' onClick={() => { handleDelete(item._id) }} />
                </div>
              </div>
            </div>
          })
        }
      </div>
    </>

  )
}

export default TodoList;