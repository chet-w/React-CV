import React, { Component } from 'react';
import { Button, Modal, Carousel } from 'antd';

export interface propTypes {
    data: {
        name: string,
        key: string,
        details: string[],
        tech: string[],
        dir: string,
        size: number,
        laptop: number,
        mobile: number
    };
}

export interface stateTypes {
    modalVisable: boolean;
}

class MoreImages extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {
            modalVisable: false
        }
    }

    render() {
        return (
            <div className="more-images">
                <Button onClick={(e: any) => this.setState({ modalVisable: true })} type="primary">More images</Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.modalVisable}
                    footer={[
                        <Button key="close" onClick={(e: any) => this.setState({ modalVisable: false })}>Close</Button>
                    ]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}



export default MoreImages
