from typing import List, Dict
from rapidfuzz import process, fuzz

class QuestionAgent:
    def cluster_questions(self, questions: List[str]) -> List[Dict]:
        if not questions:
            return []
            
        clusters = {}
        processed = set()
        
        for i, q in enumerate(questions):
            if i in processed:
                continue
                
            clusters[q] = 1
            processed.add(i)
            
            # Find similar questions
            for j, other_q in enumerate(questions):
                if j in processed:
                    continue
                
                ratio = fuzz.ratio(q.lower(), other_q.lower())
                if ratio > 70: # Threshold for similarity
                    clusters[q] += 1
                    processed.add(j)
        
        # Sort by frequency
        sorted_clusters = sorted(clusters.items(), key=lambda x: x[1], reverse=True)
        return [{"question": k, "count": v} for k, v in sorted_clusters[:3]]

question_agent = QuestionAgent()
