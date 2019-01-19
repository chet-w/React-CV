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

    getImages = () => {
        let imgs:JSX.Element[] = [];

        for(let i:number = 1; i < this.props.data.size; i++) {
            const el = (
                <img key={i} src={require(`../img/projects/${this.props.data.key}/${this.props.data.key}${i}.png`)} />
            );
            imgs.push(el);
        }
        return imgs;
    }

    render() {
        return (
            <div className="more-images">
                <Button onClick={(e: any) => this.setState({ modalVisable: true })} type="primary">More images</Button>
                <Modal
                    title={this.props.data.name}
                    style={{ top: 0 }}
                    visible={this.state.modalVisable}
                    onCancel={(e: any) => this.setState({ modalVisable: false })}
                    footer={[
                        <Button type="primary" key="close" onClick={(e: any) => this.setState({ modalVisable: false })}>Close</Button>
                    ]}
                >
                    <Carousel>
                        {this.getImages()}
                    </Carousel>
                </Modal>
            </div>
        )
    }
}



export default MoreImages
