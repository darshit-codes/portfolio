"use client";

import React, { useMemo, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Handle,
  Position,
  NodeProps,
  Edge,
  Node,
  addEdge,
  useNodesState,
  useEdgesState,
  Connection,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { 
  Database, 
  Server, 
  Layout, 
  Cpu, 
  Globe, 
  Lock, 
  Zap, 
  Search, 
  MessageSquare,
  Activity,
  Box,
  Maximize2,
  Terminal,
  Layers,
  Component
} from "lucide-react";
import { motion } from "framer-motion";

const getTypeStyles = (type: string) => {
  const t = type.toLowerCase();
  switch (t) {
    case 'ui': return { color: '#60A5FA', icon: <Layout className="size-4" />, label: 'Interface' };
    case 'api': return { color: '#34D399', icon: <Terminal className="size-4" />, label: 'Gateway' };
    case 'storage': 
    case 'database': return { color: '#FBBF24', icon: <Database className="size-4" />, label: 'Data Lake' };
    case 'service': return { color: '#818CF8', icon: <Layers className="size-4" />, label: 'Microservice' };
    case 'cluster': return { color: '#F97316', icon: <Activity className="size-4" />, label: 'Compute Cluster' };
    case 'orchestrator': return { color: '#A78BFA', icon: <Activity className="size-4" />, label: 'Neural Engine' };
    case 'agent': return { color: '#F472B6', icon: <MessageSquare className="size-4" />, label: 'Autonomous Agent' };
    case 'pipeline': return { color: '#22D3EE', icon: <Zap className="size-4" />, label: 'Data Flow' };
    case 'layer': return { color: '#94A3B8', icon: <Box className="size-4" />, label: 'Abstraction' };
    case 'search': return { color: '#FB7185', icon: <Search className="size-4" />, label: 'Retrieval' };
    case 'auth': return { color: '#F87171', icon: <Lock className="size-4" />, label: 'Security' };
    default: return { color: '#A78BFA', icon: <Component className="size-4" />, label: 'Module' };
  }
};

const CustomNode = ({ data, selected }: NodeProps) => {
  const styles = getTypeStyles(data.type as string || "");
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className={`relative px-4 py-3 rounded-xl border transition-all duration-300 min-w-[160px] group ${
        selected ? 'ring-1 ring-white/10' : ''
      }`}
      style={{ 
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
        borderColor: selected ? styles.color : `${styles.color}44`,
        boxShadow: selected ? `0 0 25px ${styles.color}33` : `0 0 15px rgba(0,0,0,0.3)`,
        backdropFilter: 'blur(12px)'
      }}
    >
      {/* Subtle Corner Glows */}
      <div className="absolute -top-[1px] -left-[1px] size-1.5 border-t border-l rounded-tl-sm opacity-60" style={{ borderColor: styles.color }} />
      <div className="absolute -bottom-[1px] -right-[1px] size-1.5 border-b border-r rounded-br-sm opacity-60" style={{ borderColor: styles.color }} />

      <div className="flex items-center gap-3 relative z-10">
        <div 
          className="flex-shrink-0 size-9 flex items-center justify-center rounded-lg border transition-all duration-500"
          style={{ 
            backgroundColor: `${styles.color}15`,
            borderColor: `${styles.color}33`,
            color: styles.color,
          }}
        >
          {styles.icon}
        </div>
        
        <div className="flex flex-col items-start">
          <div 
            className="text-[8px] font-mono font-bold uppercase tracking-[0.2em] opacity-50 mb-0.5"
            style={{ color: styles.color }}
          >
            {styles.label}
          </div>
          
          <div className="text-[11px] font-bold text-white/90 tracking-wide uppercase truncate max-w-[100px]">
            {data.label as string}
          </div>
        </div>
      </div>
      
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-1 !rounded-full !bg-white/10 !border-none !-top-[2px]"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-1 !rounded-full !bg-white/10 !border-none !-bottom-[2px]"
      />
    </motion.div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

interface ArchitectureDiagramProps {
  nodes: Node[];
  edges: Edge[];
}

export function ArchitectureDiagram({ nodes: initialNodes, edges: initialEdges }: ArchitectureDiagramProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ 
      ...params, 
      animated: true, 
      style: { stroke: "#8B5CF6", strokeWidth: 2, opacity: 0.9, strokeDasharray: '4,4' },
      type: 'smoothstep'
    }, eds)),
    [setEdges]
  );

  const defaultEdgeOptions = {
    type: 'smoothstep',
    animated: true,
    style: {
      stroke: "#ffffff30",
      strokeWidth: 2,
      opacity: 0.6,
    },
  };

  return (
    <div className="w-full h-[450px] sm:h-[600px] rounded-[2.5rem] border border-white/5 bg-[#030303] overflow-hidden relative group shadow-2xl">
      {/* HUD Elements */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 size-8 sm:size-12 border-t border-l border-white/5 rounded-tl-xl sm:rounded-tl-2xl" />
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 size-8 sm:size-12 border-b border-r border-white/5 rounded-br-xl sm:rounded-br-2xl" />
        
        <div className="absolute top-8 left-16 sm:top-12 sm:left-24 flex items-center gap-2 sm:gap-3">
          <div className="size-1 sm:size-1.5 rounded-full bg-blue-500/50 animate-pulse" />
          <div className="text-[6px] sm:text-[7px] font-mono text-white/20 tracking-[0.4em] uppercase">
            SYS_ENGINE_ONLINE
          </div>
        </div>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
        colorMode="dark"
        minZoom={0.1}
        maxZoom={1.5}
      >
        <Background 
          color="#333" 
          gap={25} 
          variant={BackgroundVariant.Dots} 
          className="opacity-50"
        />
        
        <Controls 
          className="!m-12 !bg-black/80 !border-white/10 !p-2 !rounded-xl !backdrop-blur-xl shadow-2xl" 
          showInteractive={false}
        />
      </ReactFlow>

      {/* Radial Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-10" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.05)_0%,transparent_50%)] z-10" />
    </div>
  );
}
