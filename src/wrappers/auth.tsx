import url from '*.svg';
import { Redirect } from 'umi'
import { useAuth } from './hook'
import WHF from '@/components/whf'
export default (props: any) => {
    const { isLogin } = useAuth();
    if (isLogin) {
        return <div>{props.children}</div>;
    } else {
        return <WHF />
    }
}