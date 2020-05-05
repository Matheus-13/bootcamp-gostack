import React from 'react';
import './PostItem.css';

class PostItem extends React.Component {
	render() {
		return(
			<div className='post'>
				<div className='post-header'>
					<img src={this.props.data.avatar} />
					<div className='post-header-box'>
						<span>{ this.props.data.name }</span>
						<span>{ this.props.data.date }</span>
					</div>
				</div>
				<div className='post-body'>
					<p>{ this.props.data.content }</p>
				</div>
				<div className='post-comments'>
					{this.props.data.comments.map((comment) => (
						<div className='post-comment'>
							<div className='post-comment-header'>
								<img src={ comment.avatar }/>
								<span>{ comment.name }</span>
							</div>
							<div className='post-comment-body'>
								<p>{ comment.content }</p>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default PostItem;