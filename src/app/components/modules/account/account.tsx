import Container from '@/app/components/elements/container/container'
import Link from "next/link";
import GoogleAuthButton from '../../elements/button/googleAuthButton';
import { useSession, signOut } from "next-auth/react";
import './account.css'
import '@/app/globalStyles/globals.css'
const Account = () => {
    const session = useSession()
    return (
            <section className="account">
                <Container className="account__container">
                    <h2 className="account__title">Личный кабинет</h2>

                    {session?.data?( 
                    <div className="account__links">
                    <Link className="link account__link-catalog" href={'/catalog/main'}>Перейти в каталог</Link>
                    <Link href='#' className="link account__link" onClick={() => signOut({ callbackUrl: '/'})}>Выйти</Link>
                    </div>
                    )
                        : 
                    <GoogleAuthButton/>}
                </Container>
            </section>
    )
}

export default Account