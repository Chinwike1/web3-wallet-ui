import Button from '@/components/Button'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { FaUser } from 'react-icons/fa'
import { HiCamera } from 'react-icons/hi'
import { useForm } from 'react-hook-form'

const Profile = () => {
    const formFields = [
        {
            label: 'First Name',
            type: 'text',
            placeholder: 'Mithilia',
            className: 'theme-input',
        },
        {
            label: 'Last Name',
            type: 'text',
            placeholder: 'Mac',
            className: 'theme-input',
        },
        {
            label: 'Email',
            type: 'email',
            placeholder: 'milithiamac@gmail.com',
            className: 'theme-input',
        },
        {
            label: 'Phone',
            type: 'tel',
            placeholder: '+91 1234 567 890',
            className: 'theme-input',
        },
    ]

    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        // process form info here
        console.log(data)
    }

    return (
        <AppLayout
            header={
                <h2>
                    <FaUser />
                    <span>Profile</span>
                </h2>
            }>
            <Head>
                <title>Profile</title>
            </Head>
            <div className="p-3 profile-page-area clearfix">
                <div className="profile-page-area-main">
                    <div className="profile-information">
                        <div className="editprofile-images">
                            <div className="edit-images">
                                <img
                                    src="assets/images/profile.jpg"
                                    alt="Profile"
                                />
                                <span className="edit-label d-flex justify-content-center align-items-center">
                                    <HiCamera />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="profile-information-right">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="profile-information-box">
                                {formFields.map(field => (
                                    <div
                                        key={field.label}
                                        className="theme-input-box">
                                        <label>{field.label}</label>
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className={field.className}
                                            {...register}
                                        />
                                    </div>
                                ))}
                                <div className="profile-btn">
                                    <Button value="save" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Profile
