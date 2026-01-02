import React from 'react';
import { APK_INFO } from '../constants';
import { Download } from 'lucide-react';
import { Button } from './Button';

export const DownloadTable: React.FC = () => {
  return (
    <div className="bg-gaming-dark border border-slate-700 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-gaming-primary to-orange-700 p-4">
        <h3 className="text-xl font-bold text-white text-center flex items-center justify-center gap-2">
          <Download className="w-6 h-6" />
          APK File Details
        </h3>
      </div>
      
      <div className="p-6">
        <table className="w-full text-left border-collapse">
          <tbody className="divide-y divide-slate-700">
            {Object.entries(APK_INFO).map(([key, value]) => (
              <tr key={key} className="hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 text-gaming-muted font-medium capitalize w-1/3">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </td>
                <td className="py-4 px-4 text-white font-semibold">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8 flex flex-col gap-4">
          <Button 
            fullWidth 
            onClick={() => window.open('https://ff-advance.ff.garena.com/', '_blank')}
          >
            Go to Official Download Page
          </Button>
          
          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 flex gap-3 items-start">
            <div className="text-yellow-500 mt-1">⚠️</div>
            <p className="text-sm text-yellow-200/80">
              <strong>Disclaimer:</strong> We do not host APK files. All download links redirect to official Garena sources or trusted educational guides only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};