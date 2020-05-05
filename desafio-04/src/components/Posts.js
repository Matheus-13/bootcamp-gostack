import React from "react";
import PostItem from "./PostItem";

class Posts extends React.Component {
	state = {
		posts: [
			{
				id: "1",
				name: "Naruto Uzumaki",
				avatar: "https://avatarfiles.alphacoders.com/110/110981.jpg",
				date: "04/05/2019",
				content: "Bom dia pessoal! Vocês poderiam me dizer qual é mesmo o horário do treino amanhã?",
				comments: [
					{
						name: "Sasuke Uchiha",
						avatar: "https://avatarfiles.alphacoders.com/101/101899.jpg",
						content: "Você se esqueceu de novo? É as 8, perdedor."
					}
				]
			},
			{
				id: "2",
				name: "Sasuke Uchiha",
				avatar: "https://avatarfiles.alphacoders.com/101/101899.jpg",
				date: "09/05/2019",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas ligula porta sem condimentum, a vulputate lectus blandit. Suspendisse consectetur gravida lacus, congue blandit lorem. Mauris metus dui, egestas sollicitudin tempus a, dapibus eget dolor. Maecenas egestas libero neque. Mauris vel lobortis diam. Aliquam sed risus non mi condimentum dapibus non sed eros. Maecenas molestie id elit eget volutpat. Sed porta dictum metus, a eleifend quam iaculis id.",
				comments: [
					{
						name: "Sakura Haruno",
						avatar: "https://avatarfiles.alphacoders.com/187/187141.jpg",
						content: "Aliquam sollicitudin vehicula magna, vitae maximus odio. Nam arcu ipsum, blandit ac arcu sit amet, volutpat consectetur justo. Fusce enim massa, volutpat id ultricies non, sagittis sodales tellus. Sed volutpat diam nec luctus mattis. Sed et ante felis. Aliquam eu quam scelerisque, mattis metus a, consectetur mi. Vestibulum a consectetur mi. Aenean condimentum posuere purus, eget ullamcorper velit consectetur quis. Curabitur quis justo quis lectus accumsan fringilla. Vestibulum venenatis tempor mi, eget tempor nisi semper et."
					},
					{
						name: "Naruto Uzumaki",
						avatar: "https://avatarfiles.alphacoders.com/110/110981.jpg",
						content: "In gravida tempus dictum. Praesent neque erat, luctus quis commodo sit amet, placerat eget magna. Nunc facilisis accumsan lectus in ullamcorper. Praesent sodales pulvinar ultricies. Suspendisse potenti. Fusce vehicula molestie pharetra. Fusce nibh lacus, scelerisque vitae nibh cursus, ornare hendrerit odio. Aliquam in neque ac justo congue volutpat. In euismod, justo a dapibus sagittis, ex diam viverra leo, in venenatis neque metus id dui. Pellentesque dapibus auctor lectus, sed faucibus neque ultricies et. In condimentum odio et commodo ullamcorper. Donec vulputate ante ac dolor faucibus, non dictum diam bibendum."
					}
				]
			}
		]
	};

	render() {
		return(
			<div className="container">
				{this.state.posts.map((post) => (
					<PostItem key={post.id} data={post} />
				))}
			</div>
		)
	};
}

export default Posts;