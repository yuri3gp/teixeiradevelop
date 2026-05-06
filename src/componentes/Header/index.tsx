import { UlStyle, LiStyle, NavStyle, BrandStyle } from './styles';
import dataMenu from '../../database/dataMenu.json';
import { Outlet } from 'react-router-dom';

const sectionMap: Record<string, string> = {
    Inicio: '#inicio',
    Produto: '#produto',
    Empresa: '#empresa',
    Contato: '#contato'
};

export default function Header()
{
    return(
        <>
                        <NavStyle>
                            <BrandStyle href="#inicio">Teixeira Develop</BrandStyle>
                            <UlStyle>
                                {dataMenu.map((item) => (
                                    <LiStyle key={item}>
                                        <a className="linkRoute" href={sectionMap[item] ?? '#inicio'}>
                                            {item}
                                        </a>
                                    </LiStyle>
                                ))}
                            </UlStyle>
                        </NavStyle>
            <Outlet />
        </>
    )
}