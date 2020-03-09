import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import InfoBox from '../../components/Login/InfoBox';
import LeftFooter from '../../components/Login/LeftFooter';
import LoginBox from '../../components/Login/LoginBox';
import { LoginState } from '../../model/LoginState';
import './Login.css';

interface Props {
    dispatch: any;
    loginState: LoginState;
}

export class Login extends React.PureComponent<Props> {
    private className = 'login'

    public render() {
        const c = this.className;
        const { dispatch, loginState } = this.props;
        
        return (
            <Container fluid={true}>
                <Row>
                    <Col className={`${c}-col ${c}-col-left`}>
                        <div className={`${c}-col-left-container`}>
                            <InfoBox />
                            <LeftFooter />
                        </div>
                    </Col>
                    <Col className={`${c}-col ${c}-col-right`}>
                        <div className={`${c}-col-right-container`}>
                            <div className="uw-logo-wrapper">
                                <img className="uw-logo" src={process.env.PUBLIC_URL + '/uw-logo.png'} alt="uw logo" />
                            </div>
                            <LoginBox 
                                dispatch={dispatch}
                                loginState={loginState}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}