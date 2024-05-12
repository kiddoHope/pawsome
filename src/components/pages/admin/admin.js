import React from 'react'
// css
import '../../css/admin.css'
// jsfile
import Sidenav from './sideNav'

const Admin = () => {
  return (
    <div className="admin">
        <div className="mainAdmin">
            <div className="admin-container">
                <div className="admin-header">
                    <div className="adminUser">
                        <h1>Admin hope</h1>
                    </div>
                </div>
                <div className="admin-contents">
                    <section>
                        <Sidenav/>
                    </section>
                    <section>

                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin