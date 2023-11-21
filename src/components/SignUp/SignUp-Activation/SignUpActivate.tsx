import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activateSignUp } from "../../../redux/action-creators/user_action_creator";

const SignUpActivate = () => {
  const {uid = '', token = ''} = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(activateSignUp({uid, token}))
  }, [uid, token])
  return (
    <div>
      ...loading
    </div>
  )
}

export { SignUpActivate }