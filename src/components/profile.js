const profile = () => {
  return (
    <nav className="profile">
      <div>
        <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="content-img" className="profile__content-img" />
      </div>
      <div className="profile__profile">
        <img src="https://i.pinimg.com/236x/85/06/5d/85065dd0aba6a51eb023f029f879b62a.jpg" alt="avatar" className="profile__profile__avatar" />
        <ul className='profile__profile__info'>
          <li>name:Nazar</li>
          <li>age:15</li>
          <li>birthday: 4 August</li> 
        </ul>
      </div>
      <div className="profile__posts">
        <div className="profile__posts__title">MyPosts</div>
        <textarea className='profile__posts__text-area' name="post" id="1" cols="30" rows="10"></textarea>
      </div>
    </nav>
  )
}

export default profile;