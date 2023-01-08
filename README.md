# Youtube
### Site : https://magnificent-queijadas-85a83d.netlify.app/
![youtube](https://user-images.githubusercontent.com/88068412/210200880-8203b7be-2a69-40a0-bf26-6c1bc843e97e.png)

1. Youtube APIs 사용해서 key 발급.
2. postman 사용해서 관련된 APIs들 관리.
3. React-router-dom을 사용하여 index.js에서 라우터 설정.(videos, videos/:keyword, videos/watch/:videoId)
4. App.js에서 outlet을 해줌.
5. Form태그 안에서 input, button을 사용해서 검색 헤더를 만들어주고, search를 하면 검색어 페이지로 이동해야하기 때문에 useNavigate를 사용해서 연결시켜줌.
6. 뒤로 갈때마다 param이 바뀌게 만드려면 useEffect(()=> setText(keyword || ''), [keyword]); 사용.
7. 키워드가 있다면 검색 결과를 보여주고, 없다면 핫트렌드를 보여줌.
8. 관련된 APIs 들을 JSON 포멧으로 저장하여 MOCK data를 사용. (서버 과부하로 인해 Youtube에서 하루 10000 unit으로 한정해놓음.)
9. useQuery를 사용해서 VideoCard에서 isLoading, error, fetch로 JSON 포맷을 가져옴.
10. response를 json으로 반환할 필요가 없고, 네트워크 에러를 조금 더 쉽게 구별할 수 있는 유용한 axios 라이브러리를 fetch 대신 사용.
11. MOCK data와 실제 API를 swiching하기 위해 useQuery안에 네트워크 관련된 로직을 youtube.js, fakeYoutube.js 로 나눠서 빼줌.
12. FakeYoutube는 class를 사용해서 keyword가 있으면 #searchByKeyword, 아니면 #mostPopular가 나오게 만들어서 id가 동일하게 문자로 나오게 만들어서 Videos의 인스턴스로 전달.
13. 실제 Youtube도 class를 사용해서 axios로 만들어줌. key는 .env파일에 REACT_APP_YOUTUBE_kEY로 환경변수로 저장해줌.
14. 개발이 마무리 되어 갈때에는 실제 Youtube APIs를 사용.
15. VideoCard안에 snippet안에 있는 title, thumbnail, description, channelTitle, publishedAt을 가져옴.
16. 날짜는 timeAgo 라이브러리를 사용해서 format(publishedAt)으로 키를 지정해줌. => 1 month ago 이렇게 나옴. 재사용을 위해 date.js에 따로 만들어줌.
17. 비디오를 누르면 해당 비디오 watch로 이동이 되도록 useNavigate를 사용해서 만들어줌.
18. VideoDetail에서 useLocation을 사용해서 상태를 받아오고 iFrame을 사용해서 비디오를 가지고옴.
19. snippet안에서 title, channelId, thumbnail, description 받아옴.
20. 오른쪽에는 video.id와 연관된 비디오들이 나올 수 있게 RelatedVideos를 만들어줌.
21. useQuery의 stale time을 조절해줌.
22. 사용된 API
  1) 키워드 검색
  https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]

  2) 핫트렌드 비디오들
  https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=[YOUR_API_KEY]

  3) 연관된 비디오 검색
  https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&maxResults=25&key=[YOUR_API_KEY]

  4) 채널 상세내용
  https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]
  
22. TailWindCss 을 활용해서 반응형까지 작업.
23. Netlify를 사용하여 배포.
