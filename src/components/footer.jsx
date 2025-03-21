import React from 'react'

const footer = () => {
  return (
    <footer className='bg-gray-800 text-white border-t border-gray-700 py-8 w-full'>
      <div className='container max-w-screen-xl px-4 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <div className='flex gap-2 mb-4 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"   stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-6 h-6 text-blue-400"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              <h3 className='font-bold text-lg'>DoubleGreen Stats</h3>
            </div>
            <p className='text-sm text-gray-400'>Sua fonte confiável de estatísticas para apostas esportivas.</p>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Links Rápidos</h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a className='hover:text-blue-400' href="">Início</a></li>
              <li><a className='hover:text-blue-400' href="">Estatísticas</a></li>
              <li><a className='hover:text-blue-400' href="">Competições</a></li>
              <li><a className='hover:text-blue-400' href="">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Competições</h3>
            <ul className='space-y-2 text-gray-400'>
            <li><a className='hover:text-blue-400' href="">Champions League</a></li>
              <li><a className='hover:text-blue-400' href="">Premier League</a></li>
              <li><a className='hover:text-blue-400' href="">La Liga</a></li>
              <li><a className='hover:text-blue-400' href="">Série A</a></li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold mb-4'>Redes Sociais</h3>
            <div className='flex gap-4 text-gray-400'>
              <a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> </a>
              <a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
              <a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> </a>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm'><p>© 2024 DoubleGreen Stats. Todos os direitos reservados.</p></div>
      </div>
    </footer>
  )
}

export default footer