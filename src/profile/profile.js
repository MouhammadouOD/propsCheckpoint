import React from 'react';



function Profile({fullName ="defaultName" , bio="defaultBio", profession="defaultProfession" , handleName , children}){
    const style1 = {
       backgroundColor : "#282C34",
       color: "white"
     }
     const style2 = {
        backgroundColor : "#282C34",
        color: "white",
        textAlign : "left"
      }
    return(
        <div>
            <div style={style2}>
                <h1>{handleName(fullName)}</h1>
                <h1>Name : {fullName}</h1>
                <h3>Profession : {profession}</h3>
                <h3>Bio : <br/><span>{bio}</span></h3>
            </div>
            <span>{children}</span>
        </div>
    )
}
export default Profile;