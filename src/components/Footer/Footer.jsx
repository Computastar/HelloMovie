import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn,
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <MDBBtn
                        outline
                        color='light'
                        floating
                        className='m-1'
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn
                        outline
                        color='light'
                        floating
                        className='m-1'
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn
                        outline
                        color='light'
                        floating
                        className='m-1'
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn
                        outline
                        color='light'
                        floating
                        className='m-1'
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn
                        outline
                        color='light'
                        floating
                        className='m-1'
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </section>

                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size='auto'>
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start>
                                <MDBInput
                                    contrast
                                    type='email'
                                    label='Email address'
                                    className='mb-4'
                                />
                            </MDBCol>

                            <MDBCol size='auto'>
                                <MDBBtn
                                    outline
                                    color='light'
                                    type='submit'
                                    className='mb-4'
                                >
                                    Subscribe
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt distinctio earum repellat quaerat voluptatibus
                        placeat nam, commodi optio pariatur est quia magnam eum
                        harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>
            </MDBContainer>

            <div
                className='text-center p-3'
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            >
                © 2023 Copyright:
                <a className='text-white mx-1' href='/'>
                    HelloMovie
                </a>
            </div>
        </MDBFooter>
    );
}
