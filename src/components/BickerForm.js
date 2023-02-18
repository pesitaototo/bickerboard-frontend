import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createBicker } from "../reducers/bickersReducer"

const BickerForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  const handleNewBicker = (e) => {
    e.preventDefault()

    dispatch(createBicker(title, content))

    setTitle('')
    setContent('')
  }

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  })

  return (
    <div className="new-bicker">
      <h2>New Bicker</h2>
      <form onSubmit={handleNewBicker}>
        <div>
          <TextField 
            label="title"
            fullWidth
            variant="filled"
            value={title}
            onChange={({target}) => setTitle(target.value)}
          /> 
        </div>
        <div>
        <TextField
          label="content"
          variant="filled"
          fullWidth
          rows={6}
          multiline
          value={content}
          onChange={({target}) => setContent(target.value)}
        />
        </div>
        <Button type="submit">
          Create
        </Button>
      </form>
    </div>
  )
}

export default BickerForm