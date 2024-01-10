import React from 'react'
import { use_user_auth } from '../../../script/authcontext'
import { Navigate, useNavigate } from 'react-router-dom'
import { uploadVideo } from '../../shared/services'

const Profile = () => {
    const {user, isLoading, logOut} = use_user_auth()
    if( !user || !Object.keys(user) == 0 && isLoading == false){
        return <Navigate to={'/login'}/>
    } 

    const on_logout_click = async (event)=>{
        event.preventDefault();
        try{
            console.log(user.email + 'Logged Out')
            await logOut()
            return <Navigate to={'/login'}/>
        }
        catch(err){
            console.log(err)
        }
    }

    const upload_file = async (event) => {
        try {
            const base64String = await fileToBase64(event.target.files[0]);
            const response = await uploadVideo(base64String)
            console.log(response);
          } catch (error) {
            console.error('Error uploading video:', error);
          }
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result.split(',')[1]);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      };

    
      

  return (
    <div className='m-2'>
        <div className='mb-4'>
            <h3>Profile</h3>
        </div>
        <div className='mb-4'>
            Username: {user.displayName || 'Default'}
            <br />
            Email: {user.email}
        </div>
        <div className='mb-4'>
            <button className='btn btn-danger rounded-pill ' type='button' onClick={on_logout_click}> Logout</button>
        </div>
        <div className ="mb-3">
            <label htmlFor="formFileSm" className="form-label">Upload a file </label>
            <input className="form-control form-control-sm" id="formFileSm" type="file" name='file_content' onChange={upload_file}/>
        </div>
    </div>
  )
}

export default Profile