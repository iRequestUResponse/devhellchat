global.Layout = OBJECT({
	
	init : (inner, self) => {
		
		let sendMessage;
		
		let content;
		let menu;
		let recentlyUserList;
		let menuLayout = Yogurt.MenuLayout({
			toolbar : Yogurt.Toolbar({
	
				contentStyle : {
					onDisplayResize : (width, height) => {
	
						if (width > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
							return {
								left : 0,
								width : BODY.getWidth() - Yogurt.Theme.menuLayoutMenuWidth
							};
						} else {
							return {
								left : 0,
								width : '100%'
							};
						}
					}
				},
				
				right : Yogurt.ToolbarButton({
					style : {
						onDisplayResize : (width, height) => {
	
							if (width > Yogurt.Theme.menuLayoutHideMenuWinWidth) {
								return {
									display : 'none'
								};
							} else {
								return {
									display : 'block'
								};
							}
						}
					},
					icon : FontAwesome.GetIcon('bars'),
					on : {
						tap : (e) => {
							menuLayout.toggleRightMenu();
						}
					}
				}),
				
				title : DIV({
					style : {
						marginLeft : -15
					},
					c : ['🔥 ', SPAN({
						style : {
							cursor : 'default'
						},
						c : 'devhellchat',
						on : {
							touchstart : (e) => {
								e.stop();
							},
							mouseover : (e, span) => {
								span.empty();
								span.append('개발자지옥챗');
							},
							mouseout : (e, span) => {
								span.empty();
								span.append('devhellchat');
							}
						}
					})]
				})
			}),
			
			rightMenu : DIV({
				c : [menu = DIV({
					c : DIV({
						style : {
							padding : 10,
							borderBottom : '1px solid #666'
						},
						c : '로그인 ㄱㄱ'
					})
				}), recentlyUserList = DIV({
					c : DIV({
						style : {
							padding : 10
						},
						c : '접속자 로딩중...'
					})
				})]
			}),
			
			c : content = DIV({
				style : {
					position : 'relative',
					backgroundColor : '#fff',
					color : '#000',
					onDisplayResize : (width, height) => {
						return {
							height : height - 48
						};
					}
				}
			})
		}).appendTo(BODY);
		
		let getContent = self.getContent = () => {
			return content;
		};
		
		let showMenu = self.showMenu = () => {
			menu.empty();
			
			menu.append(A({
				style : {
					display : 'block',
					borderBottom : '1px solid #666',
					padding : 10
				},
				c : '도움말 (개발중)'
			}));
			
			menu.append(A({
				style : {
					display : 'block',
					borderBottom : '1px solid #666',
					padding : 10
				},
				c : '개발 노트 (개발중)'
			}));
			
			menu.append(A({
				style : {
					display : 'block',
					borderBottom : '1px solid #666',
					padding : 10
				},
				c : '유용한 링크 (개발중)'
			}));
			
			menu.append(A({
				style : {
					display : 'block',
					borderBottom : '1px solid #666',
					padding : 10
				},
				c : '유게짱 (개발중)'
			}));
			
			menu.append(A({
				style : {
					display : 'block',
					borderBottom : '1px solid #666',
					padding : 10
				},
				c : '기능 추가 요청 (개발중)'
			}));
		};
		
		let setRecentlyUsers = self.setRecentlyUsers = (users) => {
			recentlyUserList.empty();
			
			recentlyUserList.append(DIV({
				style : {
					borderBottom : '1px solid #666',
					padding : 10
				},
				c : '접속자 ' + users.length + '명'
			}));
			
			EACH(users, (user) => {
				
				let icon;
				recentlyUserList.append(A({
					style : {
						display : 'block',
						borderBottom : '1px solid #666',
						padding : 10
					},
					c : [icon = IMG({
						style : {
							marginRight : 8,
							backgroundColor : '#fff',
							marginBottom : -5,
							width : 20,
							height : 20,
							borderRadius : 5
						},
						src : LoadIcon.getUserIconURL(user.userId) === undefined ? user.userIconURL : LoadIcon.getUserIconURL(user.userId)
					}), user.name],
					on : {
						tap : (e) => {
							e.stop();
							
							ContextMenu({
								style : {
									left : e.getLeft(),
									top : e.getTop()
								},
								c : [LI({
									style : ContextMenu.getItemStyle(),
									c : UUI.BUTTON_H({
										style : {
											margin : 'auto'
										},
										icon : FontAwesome.GetIcon({
											style : {
												marginTop : 1
											},
											key : 'id-card'
										}),
										spacing : 8,
										title : MSG({
											ko : '정보보기'
										})
									}),
									on : {
										tap : () => {
											UserPanel({
												userId : user.userId,
												name : user.name,
												userIconURL : user.userIconURL
											});
										}
									}
								}), LI({
									style : ContextMenu.getItemStyle(),
									c : UUI.BUTTON_H({
										style : {
											margin : 'auto'
										},
										icon : FontAwesome.GetIcon({
											style : {
												marginTop : 1
											},
											key : 'phone-square'
										}),
										spacing : 8,
										title : MSG({
											ko : '호출하기'
										})
									}),
									on : {
										tap : () => {
											ChatController.sendMessage('@' + user.name);
										}
									}
								})]
							});
						}
					}
				}));
				
				LoadIcon(user.userId, (url) => {
					icon.setSrc(url);
				});
			});
		};
	}
});