import {Navigate, useLocation} from 'react-router-dom';
import {useAuthenticator} from '@aws-amplify/ui-react';
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

export function RequireAuth({children}: Props) {
    const location = useLocation();
    const {route} = useAuthenticator((context) => [context.route]);
    if (route !== 'authenticated') {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }
    return children;
}