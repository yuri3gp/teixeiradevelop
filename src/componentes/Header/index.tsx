import {Menu,Item} from './styles';
import dataMenu from '../../database/dataMenu.json';
import { Outlet, Link } from "react-router-dom";

export default function Header()
{
    return(
        <>
            <Menu>
                {dataMenu.map((item,index)=>(
                    <Item><Link style={{ color: "white", textDecoration: "none"}} to={`/${item}`} key={index}>{item}</Link></Item>
                ))}
            </Menu>
            <Outlet />
        </>
    )
}