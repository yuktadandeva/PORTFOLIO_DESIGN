import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <ul className='flex'>
        <li><a href="/public/utils/cv/yukta_dandeva.pdf" download>CV </a></li>
        <li><a href="https://www.linkedin.com/in/yukta-dandeva-121a03257/" target='/blank'>Linkedin</a></li>
        <li><a href="https://github.com/yuktadandeva" target='/blank'>Github</a></li>
        <li><a href="mailto:yuktadandeva@gmail.com" target='/blank'>Mail</a></li>
      </ul>
    </div>
  )
}
