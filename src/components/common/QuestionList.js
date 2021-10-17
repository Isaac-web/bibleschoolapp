import React from 'react';
import {Box} from "@material-ui/core";

import QuestionBox from './QuestionBox';

const QuestionList = ({questions}) => {
    if(!questions?.length) return <h1>Nothing yet</h1>;
    return (
        <Box>
            {questions.map((item, index) => 
                    <Box style={{margin: "10px 0"}} key={item.question+index}>
                        <QuestionBox 
                            question={item?.question} 
                            possibleAnswers={item?.possibleAnswers} 
                            onAnswerSelect={ans => console.log(ans)}
                        />
                    </Box>
                    )}
        </Box>
    )
}

export default QuestionList
