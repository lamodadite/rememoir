import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Review() {
  const location = useLocation(); // 사용자 입력값
  const { id, subject, subcategory, content } = location.state || {};
  const [response, setResponse] = useState(""); // ChatGPT 응답

  const makePrompt = () => {
	return `복습을 하려고 하니 아래 내용을 기반으로 나에게 간단한 질문을 3가지 해줘. 각 질문엔 힌트가 하나씩 있어야 해. 주제는 ${subject}이고, 서브카테고리는 ${subcategory}, 내용은 ${content}야.`
  }

  useEffect(() => {
	handleSubmit();
  }, []);

  const handleSubmit = async () => {
    try {
    //  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo", // 모델 선택
          messages: [{ role: "user", content: makePrompt() }], // 사용자 메시지
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer `, // 인증
          },
        }
      );
      setResponse(result.data.choices[0].message.content); // 응답 저장
    } catch (error) {
		console.error("Error calling OpenAI API:", error);
		setResponse("Error: Unable to fetch response.");
    } finally {
		console.log(re)
	}
  };

  return (
    <div style={{ padding: "20px" }}>
	<h2 className="text-2xl font-semibold">Review Question</h2>

      <pre>{response}</pre>
    </div>
  );
}
