package com.niit.DAO;

import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Repository;

import com.niit.model.AnswerForum;
import com.niit.model.BlogComment;

@Repository
@ComponentScan("com.niit.*")
public interface AnswerForumDao {
	void answerForum(AnswerForum answerForum);
	List<AnswerForum> viewAnswers(String forumid);
}
