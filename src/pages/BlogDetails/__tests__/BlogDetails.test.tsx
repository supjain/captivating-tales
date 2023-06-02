import { render, screen } from '@testing-library/react';
import BlogDetails from '../BlogDetails';

describe('BlogDetails Component', () => {
  test('displays correct blog title', () => {
    render (<BlogDetails/>)
    const blogTitle = screen.getByText('Blog Title');
    expect(blogTitle).toBeInTheDocument();
  });

  test('displays correct author name',() => {
    render (<BlogDetails/>)
    const authorName = screen.getByText('Authored By: First Name');
    expect(authorName).toBeInTheDocument();
  });

  test('displays correct publication date',() => {
    render (<BlogDetails/>)
    const publicationDate = screen.getByText('Published on: 12/13/2022');
    expect(publicationDate).toBeInTheDocument();
  });

  it('should render the blog content with "Lorem Ipsum" text', () => {
    render(<BlogDetails />);
    
    const blogContent = screen.getByText((content, element) => {
      const hasText = content.includes('Lorem Ipsum');
      const isParagraph = element?.tagName.toLowerCase() === 'p';
      
      return hasText && isParagraph;
    });
  
    expect(blogContent).toBeInTheDocument();
  });
});