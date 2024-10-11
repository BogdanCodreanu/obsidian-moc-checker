import { LayoutTemplate, NotebookText } from 'lucide-react';
import { DvPage } from '../../utils/fileUtils';

interface IPageTitleProps {
  page: DvPage;
}

const PageTitle = ({ page }: IPageTitleProps) => {
  return (
    <div className="sticky top-[12px] pb-s pr-[12px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-s text-lg text-text-accent">
          {page.isMoc ? <LayoutTemplate /> : <NotebookText />}
          <div>{page.file.name}</div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
